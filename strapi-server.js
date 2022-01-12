const _ = require('lodash');

module.exports = (plugin) => {
  // Create the new controller
  plugin.controllers.user.me = async (ctx) => {
    const user = ctx.state.user;
    if (!user) {
      return ctx.unauthorized();
    }
      console.log('calling about meeeeeeeeeee------')
      return;
 
  };
   plugin.controllers.auth.register = async (ctx) => {
    const user = ctx.state.user;
     // here you can write your custom code for user register
   }

  // Add the custom route
  plugin.routes['content-api'].routes.unshift({
    method: 'GET',
    path: '/users/me',
    handler: 'user.me',
    config: {
        prefix: '',
    }
  },
  {
    method: 'POST',
    path: '/auth/local/register',
    handler: 'auth.register',
    config: {
        prefix: '',
    }
  }
   );

  return plugin;
};
