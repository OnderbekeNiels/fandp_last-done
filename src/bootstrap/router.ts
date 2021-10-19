// router.ts
import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("../screens/Routines.vue"),
  },
  {
    path: "/:id",
    component: () => import("../screens/RoutineDetail.vue"),
  },
  {
    path: "/new-todo",
    component: () => import("../screens/NewTodo.vue"),
  },
  {
    path: "/new-routine",
    component: () => import("../screens/NewRoutine.vue"),
  },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

// // Route guard
// router.beforeEach(
//   (
//     route: RouteLocationNormalized,
//     from: RouteLocationNormalized,
//     next: NavigationGuardNext,
//   ) => {
//     // Check a property that you added to the route meta
//     if (route.meta.SOMETHING) {
//       // If user is allowed
//       if (userIsAllowed) {
//         next()
//       // Else redirect to error or path, etc.
//       } else {
//         router.push(from.path)
//       }
//     }
//   },
// )

export default router;
