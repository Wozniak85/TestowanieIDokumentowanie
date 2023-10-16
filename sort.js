const test = require('node:test');
const assert = require('assert');

function sort(tab) { 
  
    for (var i = 0; i < tab.length; i++) { 
        for (var j = 0; j < (tab.length - i - 1); j++) { 
  
            if (tab[j] > tab[j + 1]) { 
                var temp = tab[j] 
                tab[j] = tab[j + 1] 
                tab[j + 1] = temp 
            } 
        } 
    } 
    console.log(tab); 
}
test.describe("testSort", () => {
    test.beforeEach(() => {console.log("Testing...")})
    test.after(() => {console.log("Finished")})
    test.it("test1", () => {
        var arr = [7, 5, 1, 3, 4, 8, 2, 6]
        var expectedValue = [1, 2, 3, 4, 5, 6, 7, 8]
        var result = sort(tab);
        assert.strictEqual(result, expectedValue)
    })
    test.it("test2", () => {
        var arr = [17, 15, 11, 13, 14, 18, 12, 16]
        var expectedValue = [11, 12, 13, 14, 15, 16, 17, 18]
        var result = sort(tab);
        assert.strictEqual(result, expectedValue)
    })
    test.it("test3", () => {
        var arr = [46, 221, 69, 420, 2137, 81, 32, 11]
        var expectedValue = [11, 32, 46, 69, 81, 221, 420, 2137]
        var result = sort(tab);
        assert.strictEqual(result, expectedValue)
    })
})
