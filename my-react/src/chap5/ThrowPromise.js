let flag = false;

export default function ThrowPromise() {
    if (flag) {
        return <p>正しく表示</p>
    }
    throw new Promise((resolve, reject) => {
        setTimeout(() => {
            flag = true;
            resolve("Success!")
        }, 3000)
    })
}