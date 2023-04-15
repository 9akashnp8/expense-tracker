
export default function InputWrapper({children}) {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr'
            }}
        >
            {children}
        </div>
    )
}