import sum from "./main"

let arr = [
	"text",
	"apple",
	"orange"
]

test("func test", () => {
	expect(arr).not.toContain("malibu")
})