import star from '../shared/image/star.jpg'

export default function Star({range}){
    const newArray = Array.from({length:range}, (v, i) => i)
    return<>
        {
            newArray.map( (index) => {
                return <img key={index} className='star' src={star} />
            })
            
        }
    </>
}