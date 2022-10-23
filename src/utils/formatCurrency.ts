

export const formatCurrency: (num: number) => string = (num) => {
    const formattedCurrency = new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(num)
    // console.log(formattedCurrency);
    return formattedCurrency;
}