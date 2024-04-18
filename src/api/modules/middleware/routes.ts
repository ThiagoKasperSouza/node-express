import { config } from './Auth0';
import { Router, Request, Response } from 'express';
import pkg from 'express-openid-connect';
import DefaultHandler from '../../router/handlers/DefaultHandler';
const authRouter = Router();

// auth router attaches /login, /logout, and /callback routes to the baseURL
authRouter.use(pkg.auth(config));

// req.isAuthenticated is provided from the auth router
authRouter.get('/', (req:Request, res: Response) => {
  const isLoggedIn = req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out';
  new DefaultHandler(req,res, {
    data: req.oidc.accessToken || req.oidc.idToken,
    message: isLoggedIn
  });
});
authRouter.get('/profile', pkg.requiresAuth(), (req:Request, res:Response) => new DefaultHandler(req,res, {user:req.oidc.user}));

authRouter.get('/logout', (req:Request, res: Response) =>  res.oidc.logout());
  
export default authRouter;