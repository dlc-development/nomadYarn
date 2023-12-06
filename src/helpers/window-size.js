const windowSize = () =>{
    const width = window.innerWidth;
    if(width < 768) return 'small'
    else if(width >= 768 && width < 992) return 'medium'
    else return 'large'
}
export default windowSize;