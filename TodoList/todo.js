`use strict`
let addbtn = document.querySelector("#addbtn");
let val = document.querySelector("#inputt");
let check = document.createElement("input");
let del = document.createElement("i")
let icon2 = document.createElement("i");
let count = 0;
let countitems = null;
let additem = () => {
    val.addEventListener(("keyup"), (e) => {
        if (e.key === "Enter") {
            e.stopPropagation()
            if (val.value===""){
                let outline = document.querySelector(".outline");
                outline.classList.add("outline")
                outline.innerText=`Please Enter some item's`
            }else {
                let outline = document.querySelector(".outline");
                let div = document.createElement("div");
                div.className = "out";
                check = document.createElement("input");
                check.type = "radio", check.id = "check";
                let p = document.createElement("p")
                del = document.createElement("i")
                del.className = "bi bi-trash3";
                icon2 = document.createElement("i");
                icon2.className = "bi bi-pencil-square";
                p.innerText = `${val.value}`
                outline.append(div)
                console.log(outline);
                div.append(check, p, del, icon2)
                val.value = ""
                let c
                if (countitems === null) {
                    c = outline.childElementCount;
                    count = c;
                    // countitems = null;
                    console.log(c);
                    document.querySelector("#count").innerText = `${count}`
                }
            }
        }
    })
    addbtn.addEventListener(("click"), (event) => {
        event.stopPropagation()
        if (val.value===""){
            let outline = document.querySelector(".outline");
            outline.classList.add("outline")
            outline.innerText=`Please Enter some item's`
        } else {
            let outline = document.querySelector(".outline");
            let div = document.createElement("div");
            div.className = "out";
            check = document.createElement("input");
            check.type = "radio", check.id = "check";
            let p = document.createElement("p")
            del = document.createElement("i")
            del.className = "bi bi-trash3";
            icon2 = document.createElement("i");
            icon2.className = "bi bi-pencil-square";
            p.innerText = `${val.value}`
            outline.append(div)
            console.log(outline);
            div.append(check, p, del, icon2)
            val.value = ""
            let c
            if (countitems === null) {
                c = outline.childElementCount;
                count = c;
                // countitems = null;
                console.log(c);
                document.querySelector("#count").innerText = `${count}`
            }
        }
    }, false)
}
additem();

//////////////////////////////Delete operation //////////////////

let deleteItem = () => {
    let outline = document.querySelector(".outline");
    outline.addEventListener(("click"), (event) => {
        event.stopPropagation()
        if (event.target.className === "bi bi-trash3") {
            console.log(event.target.parentElement.remove())
            count--;
            document.querySelector("#count").innerText = `${count}/${5}`
        }
    })
}
deleteItem();


////////////////////////// Update item //////////

let update = () => {
    let outline = document.querySelector(".outline");
    outline.addEventListener(("click"), (event) => {
        if (event.target.className === "bi bi-pencil-square") {
            let parentDiv = event.target.parentElement;
            let p = parentDiv.querySelector("p");
            let currentText = p.innerText;

            let input = document.createElement("input");
            input.type = "text";
            input.value = currentText;
            input.className = "edit-input";

            parentDiv.replaceChild(input, p);

            input.addEventListener("blur", () => {
                let newText = input.value;
                p.innerText = newText;
                parentDiv.replaceChild(p, input);
            });

            input.addEventListener("keyup", (e) => {
                if (e.key === "Enter") {
                    input.blur();
                }
            });

            input.focus();
        }
    });
};
update();
