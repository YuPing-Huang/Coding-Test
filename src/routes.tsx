/* eslint-disable react-refresh/only-export-components */
import type { LazyExoticComponent } from "react";
import { lazy, Suspense } from "react";
import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";
import { Layout } from "~/components/index";

const Task1Page: LazyExoticComponent<() => JSX.Element> = lazy(() => import("~/pages/Task1"));
const Task2Page: LazyExoticComponent<() => JSX.Element> = lazy(() => import("~/pages/Task2"));
const Task3Page: LazyExoticComponent<() => JSX.Element> = lazy(() => import("~/pages/Task3"));

/** Router Path */
export enum RouterPath {
	Home = "/",
	Task1 = "task1",
	Task2 = "task2",
	Task3 = "task3",
}

/** create web routes */
const routes = createBrowserRouter(
	createRoutesFromElements([
		<Route path={RouterPath.Home} element={<Navigate to={RouterPath.Task1} />} />,
		<Route path={RouterPath.Home} element={<Layout />}>
			<Route
				path={RouterPath.Task1}
				element={
					<Suspense fallback={<>...</>}>
						<Task1Page />
					</Suspense>
				}
			/>
			<Route
				path={RouterPath.Task2}
				element={
					<Suspense fallback={<>...</>}>
						<Task2Page />
					</Suspense>
				}
			/>
			<Route
				path={RouterPath.Task3}
				element={
					<Suspense fallback={<>...</>}>
						<Task3Page />
					</Suspense>
				}
			/>
		</Route>,
	])
);

export default routes;
