# VShop

Simple e-commerce Web Shop built with [React.js](https://reactjs.org), [Commerce.js](https://commercejs.com) and [Stripe](https://stripe.com)

## Setup before running the app

### Commerce.js
1. Register or Login into [Commerce.js](https://commercejs.com)
2. Add some products, configure shipping (_Settings_) for your shop
3. Get you public API key of Developers section (_Sandbox Public Key_) and replace the value of `REACT_APP_CHEC_PUBLIC_KEY` inside `.env` file

### Stripe

1. Register or Login into [Stripe](https://stripe.com)
2. Verify your e-mail address
3. Get you public API key of Developers section (_Publishable key_) and replace the value of `REACT_APP_STRIPE_PUBLIC_KEY` inside `.env` file

### Commerce.js & Stripe
1. Settings / Payment gateways (Commerce.js Dashboard) enable Stripe 
2. Save your Stripe's API keys (_Publishable key, Secret key_)

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.