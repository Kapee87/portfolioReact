import React from 'react'

function PageNotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <img
                src="https://img.freepik.com/free-vector/404-error-with-portals-concept-illustration_114360-7870.jpg"
                alt="Página no encontrada"
                className="w-3/4 max-w-xs mb-6"
            />
            <h1 className="text-4xl font-bold text-gray-400">Página no encontrada</h1>
            <p className="text-gray-600 mt-2">La página que estás buscando no existe.</p>
        </div>
    )
}

export default PageNotFound