import loginScreen from "../Screens/Login";
import splashScreen from "../Screens/Splash";

interface IRouteProps
{
    component:React.FunctionComponent<any>;
    name:string;
    options:{
        headerShown:boolean
    }
}

const routes: IRouteProps[] = 
[
    {
        name:"Splash",
        component:splashScreen,
        options:{headerShown:false}
    },
    {
        name:"Login",
        component:loginScreen,
        options:{headerShown:false}
    }
];
export default routes;