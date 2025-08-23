import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen" style={{ paddingTop: "80px" }}>
            <Header />
            <main className="flex-1 p-4">{children}</main>
            <Footer />
        </div>
    )
}

export default Layout