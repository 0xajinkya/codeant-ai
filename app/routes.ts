import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/home/layout.tsx", [index("routes/home/index.tsx")]),
    layout("routes/login/layout.tsx", [
        route("login", "routes/login/index.tsx"),
    ]),
] satisfies RouteConfig;