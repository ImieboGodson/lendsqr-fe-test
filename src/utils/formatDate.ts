

export const formatDate: (date: Date | string) => string = (date) => {
    
    let formatedDate = new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12:true })
    console.log(formatedDate)
    return formatedDate;
}