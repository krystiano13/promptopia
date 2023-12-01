import '@styles/globals.css';

export const metadata = {
    title: 'Promptopia',
    description: 'Share AI prompts'
}
const Layout = ({ children }) => {
   return (
       <html lang="en">
        <body>
            <div className="main">
                <div className="gradient" />
            </div>
            <main className="app">
                {children}
            </main>
        </body>
       </html>
   )
}

export default Layout;