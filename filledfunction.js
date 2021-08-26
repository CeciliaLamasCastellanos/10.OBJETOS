let myObject = {
    myFunction: function(prop, value) {
        Object.defineProperty(this, prop, {
            value: value,
            writable: false,
            enumerable: true
        })
        return this
    }
}

myObject.myFunction('array','[1,4,4,5]')
console.log(myObject)