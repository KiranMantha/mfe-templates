// user app
declare module 'user/App' {
  const UserApp: React.ComponentType<{
    isSingleSpa?: boolean;
    basename?: string;
  }>;
  export default UserApp;
}

// recommendations app
declare module 'recommendations/App' {
  const RecommendationsApp: React.ComponentType<{
    isSingleSpa?: boolean;
    basename?: string;
  }>;
  export default RecommendationsApp;
}

// checkout app
declare module 'checkout/App' {
  const CheckoutApp: React.ComponentType<{
    isSingleSpa?: boolean;
    basename?: string;
  }>;
  export default CheckoutApp;
}
