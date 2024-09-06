import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";

// metaData
export const metadata = {
	title: {
		template: "%s | reqRes",
		default: "Welcome | reqRes",
	},
	description: "admin-panel",
};

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex h-screen bg-primary-100">
			<Sidebar />
			<div className="flex flex-col w-full h-full ml-64 overflow-auto">
				<Header />
				<div className="mx-36 my-10">{children}</div>
			</div>
		</div>
	);
}
