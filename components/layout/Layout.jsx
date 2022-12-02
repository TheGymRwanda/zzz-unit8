import React from 'react';

export default React.forwardRef( function Layout({ styles, children},ref) {
    return (
        <section
            ref={ref} 
            className={`px-5 mx-auto md:px-9 xl:px-16  xl:max-w-8xl ${
                styles ? styles : " "
            }`}
        >
            {children}
        </section>
    );
})
