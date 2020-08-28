const getUserIdFromWindowLocation = require("./userprofile")

describe('getUserIdFromWindowLocation', () => {
    it('should extract an id from any given URL', () => {
        const id = getUserIdFromWindowLocation("http://localhost:3000/admin/profile/16");
        expect(id).toEqual("16")
    })

})
