const user = {
    username: 'hgmj',
    age: '42'
}
export let message = [];
export const userProxy = new Proxy(user, {
    get: (obj, prop) => {
        if (!obj[prop]) {
            return `not found`
        }
        return Reflect.get(obj, prop);
    },
    set: (obj, prop, value) => {
        if (prop === 'age' && value < 18) {
            let doesMessageExist = message.find((item) => item.key === prop)
            !doesMessageExist && message.push({ key: prop, message: 'age can not be less than 18' });

        } else if (prop === 'username' && value.length < 4) {
            let doesMessageExist = message.find((item) => item.key === prop)
            !doesMessageExist && message.push({ key: prop, message: 'enter valid name' });

        } else {
            console.log(`${prop} changed from ${obj[prop]} to ${value}`);
            Reflect.set(obj, prop, value)
        }

        return true;
    }
})
