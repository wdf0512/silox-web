import React from 'react'

const AdVideoBlock = () => {
    return (
        <div
            style={{
                position: 'relative',
                top: '0px',
                left: '0px',
                width: '100vw',
                height: '60vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: -1,
            }}
        >
            <video
                src="/images/Homepage1.mp4"
                loop
                autoPlay
                muted
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            />
        </div>
    )
}

export default AdVideoBlock