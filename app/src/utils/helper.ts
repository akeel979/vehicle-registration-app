export const getShareUrl = (email: string, token: string): string => {
    const origin = window.location.origin;
    return `${origin}/?email=${email}&token=${token}`
}