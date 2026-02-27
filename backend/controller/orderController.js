const Order = require("../models/Order");
const Cart = require("../models/Cart");


// Create Order (Checkout)
exports.createOrder = async (req, res) => {
  try {

    const cartItems = await Cart.find({ user: req.user.id }).populate("product");

    if (!cartItems.length) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const items = cartItems.map(item => ({
      product: item.product._id,
      quantity: item.quantity
    }));

    const total = cartItems.reduce((sum, item) => {
      return sum + item.product.price * item.quantity;
    }, 0);

    const order = await Order.create({
      user: req.user.id,
      items,
      total
    });

    // clear cart
    await Cart.deleteMany({ user: req.user.id });

    res.json(order);

  } catch (error) {
    console.log("ORDER ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};



// Get Orders (User specific)
exports.getUserOrders = async (req, res) => {
  try {

    const orders = await Order.find({
      user: req.user._id
    }).populate("items.product");

    res.json(orders);

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};


// Update Order Status
exports.updateOrderStatus = async (req, res) => {

  try {

    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(order);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};

// Cancel Order
exports.cancelOrder = async (req,res)=>{

  try{

    const order = await Order.findByIdAndDelete(req.params.id);

    res.json({message:"Order cancelled"});

  }catch(error){

    res.status(500).json({error:error.message});

  }

};