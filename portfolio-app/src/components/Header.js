import React, { useState } from "react"

// Function for the header component, which includes the nav bar.
export default function Header() {
    // currentPage state variable for tracking which page should be rendered
    const [currentPage, setCurrentPage] = useState('About') 

    // returns a certain page based on the currentPage state variable
    const renderPage = () => {
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        if (currentPage === 'Blog') {
          return <Contact />;
        }
        return <Resume />;
      };

      const handlePageChange = (page) => setCurrentPage(page)

    return (
        <container>
            <h1>Camden Van Sciver</h1>
            {/* Send the currentPage variable and the handlePageChange to the Navigation component */}
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </container>
    )
}