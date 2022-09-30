// Add your models here if you have any
export interface Orders{
    orderId?: string
    name: string
    email: string
    size: number
    base: string
    sauce: string
    toppings: string
    comments: string
}

export interface orderDetails{
    orderId?: string
    email: string
}

export interface Response{
    code: number
    message?: string
    data?: any
}
