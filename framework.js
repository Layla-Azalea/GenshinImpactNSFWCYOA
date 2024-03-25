class Button{
    constructor(id,text,display,func) {
        this.id = id
        this.text = text
        this.display = display
        this.func = func

        this.initialize()
    }
    initialize() {
        let button = document.createElement('div')
        button.className = "button"
        button.id = this.id
        button.style.display = this.display
        button.innerHTML = `<h2>${this.text}</h2>`
        button.addEventListener('click',this.func)
        document.body.appendChild(button)
    }
}
class Header{
    constructor(id,header,text,type,display = 'block') {
        this.id = id
        this.header = header
        if (text != '') { this.text = text }
        this.type = type
        this.display = display
        this.initialize()
    }
    initialize() {
        let header = document.createElement('div')
        header.className = `header`
        header.id = this.id
        header.style.display = this.display
        if (this.type == 'section') {
            header.classList.add(this.type)
            header.innerHTML = `
            <h1>${this.header}</h1>
            `
        } else if (this.type == 'small') {
            header.innerHTML = `
            <h2>${this.header}</h2>
            `
        }
        if (this.text) { header.innerHTML += `<p>${this.text}</p>`}
        document.body.appendChild(header)
    }
}
class OverlayHeader{
    constructor(id,header,text,type,display = 'block') {
        this.id = id
        this.header = header
        if (text != '') { this.text = text }
        this.type = type
        this.display = display
        return this.initialize()
    }
    initialize() {
        let header = document.createElement('div')
        header.className = `header`
        header.id = this.id
        header.style.display = this.display
        if (this.type == 'section') {
            header.classList.add(this.type)
            header.innerHTML = `
            <h1>${this.header}</h1>
            `
        } else if (this.type == 'small') {
            header.innerHTML = `
            <h2>${this.header}</h2>
            `
        }
        if (this.text) { header.innerHTML += `<p>${this.text}</p>`}
        return header
    }
}
class Para{
    constructor(id,name,text,images,display,imgPos,imgType) {
        this.id = id
        if (name == 'none' || name == false || name == '') {this.name = ''} else {this.name = `<h2>- ${name} -</h2>`};
        this.text = text
        this.images = images //list of images
        this.display = display
        this.imgPos = imgPos
        this.origText = text
        this.imgType = imgType
        this.initialize()
    }
    initialize() {
        let div = document.createElement('div')
        div.className = 'section'
        div.id = this.id
        div.style.display = this.display
        let textDiv = `
        <div>
        ${this.name}
        <p class='para'>${this.text}</p>
        </div>`
        let imgclass = "image"
        if (this.imgType == 'horizontal') { imgclass += ' horizontal' }
        if (typeof(this.images) == 'object') {
            div.innerHTML = `
            <img class="image" src='Images/${this.images[0]}'>
            ${textDiv}
            <img class="image" src='Images/${this.images[1]}'>
            `
        } else if (typeof(this.images) == 'string') {
            if (this.imgPos == 'right') {
                div.innerHTML = `
                ${textDiv}
                <img class="${imgclass}" src='Images/${this.images}'>
                `
            } else {
                div.innerHTML = `
                <img class="${imgclass}" src='Images/${this.images}'>
                ${textDiv}
                `
            }
        } else {
            div.innerHTML = `
            ${textDiv}
            `
        }
        document.body.appendChild(div)
    }
}
class OverlayPara{
    constructor(id,name,text,images,display,imgPos,imgType) {
        this.id = id
        if (name == 'none') {this.name = ''} else {this.name = `<h2>- ${name} -</h2>`};
        this.text = text
        this.images = images //list of images
        this.display = display
        this.imgPos = imgPos
        this.origText = text
        this.imgType = imgType
        return this.initialize()
    }
    initialize() {
        let div = document.createElement('div')
        div.className = 'section'
        div.id = this.id
        div.style.display = this.display
        let textsize = ''
        if (this.id.substring(0,19) == 'BodyCharacteristics') {
            textsize = 'large'
        }
        let textDiv = `
        <div>
        ${this.name}
        <p class='para ${textsize}'>${this.text}</p>
        </div>`
        if (this.imgPos == 'space') {
            textDiv = `
            <div style="width:100%">
            ${this.name}
            <p class='para ${textsize}'>${this.text}</p>
            </div>`
        }
        let imgclass = "image"
        if (this.imgType == 'horizontal') { imgclass += ' horizontal' }
        if (typeof(this.images) == 'object') {
            div.innerHTML = `
            <img class="image" src='Images/${this.images[0]}'>
            ${textDiv}
            <img class="image" src='Images/${this.images[1]}'>
            `
        } else if (typeof(this.images) == 'string') {
            if (this.imgPos == 'space') {
                div.classList.add('space')
                div.innerHTML = `
                <img class="${imgclass}" src='Images/${this.images}'>
                ${textDiv}
                `
            } else if (this.imgPos == 'right') {
                div.innerHTML = `
                ${textDiv}
                <img class="${imgclass}" src='Images/${this.images}'>
                `
            } else {
                div.innerHTML = `
                <img class="${imgclass}" src='Images/${this.images}'>
                ${textDiv}
                `
            }
        } else {
            div.innerHTML = `
            ${textDiv}
            `
        }
        return div
    }
}
class EntryField {
    constructor(id,text,propertyHost,property,display) {
        this.id = id
        this.text = text
        this.propertyHost = propertyHost
        this.property = property
        this.display = display
        this.initialize()
    }
    initialize() {
        // <form onsubmit="return false">
        //     <input type="text" class="text" id="clothingTags-entry">
        // </form>
        
        let entry = document.createElement('div')
        entry.id = this.id
        entry.className = 'section'
        entry.style.display = this.display
        entry.innerHTML = `
        <form onsubmit="return false">
            <input type="text" class="text" id="${this.id}-entry" placeholder="Name">
        </form>
        `
        document.body.appendChild(entry)
        document.getElementById(`${this.id}-entry`).addEventListener('change', () => this.updateValue() )
    }
    updateValue() {
        if (this.propertyHost == 'Player') {
            Player[this.property] = document.getElementById(`${this.id}-entry`).value
        }
    }
}
class Choice {
    constructor(id,name,text,image,attr,value,children,conflicts,requirementfor,type = 'small',imgPos = 'left',display = 'flex',cost = false) {
        this.id = id
        this.name = name
        if (text != false) { this.text = text } else { this.text = '' }
        if (image==false) {this.image = 'PlaceholderImage.png'} else {this.image = image}
        this.attr = attr
        this.value = value
        this.children = children
        this.conflicts = conflicts
        this.requirementfor = requirementfor
        this.type = type
        this.imgPos = imgPos
        this.display = display
        this.cost = cost

        this.enabled = false
    }
    create() {
        let choice = document.createElement('div')
        choice.id = this.id
        choice.tabIndex = '0'
        if (this.type.includes('small')) {
            choice.className = 'image small choice'
            choice.innerHTML = `
            <h3>${this.name}</h3>
            <img class="image choice" src="Images/${this.image}">
            <p>${this.text}</p>
            `
        } else if (this.type.includes('large')) {
            choice.className = 'image large choice'
            choice.innerHTML = `
            <img class="image choice" src="Images/${this.image}">
            <div>
                <h3>${this.name}</h3>
                <p>${this.text}</p>
            </div>
            `
        } else if (this.type.includes('wide')) {
            choice.className = 'image wide choice'
            choice.innerHTML = `
            <img class="image choice" src="Images/${this.image}">
            <div>
                <h3>${this.name}</h3>
                <p>${this.text}</p>
            </div>
            `
        } else if (this.type.includes('text')) {
            choice.className = 'image small choice'
            choice.innerHTML = `
                <h3>${this.name}</h3>
                <p>${this.text}</p>
            `
        } else if (this.type.includes('dialogue')) {
            choice.className = 'image small choice'
            choice.innerHTML = `
                <h3>${this.name}</h3>
            `
        }
        if (this.type.includes('borderless')) {
            if (this.type.includes('small')) {
                choice.children[1].classList.add('borderless')
            } else {
                choice.children[0].classList.add('borderless')
            }
        }
        choice.setAttribute('activation','inactive')
        choice.style.display = this.display
        return choice
    }
    activate() {
        if (Array.isArray(this.children)) {
            this.showChildren()
        }
        if (this.conflicts) {
            this.conflictBlock()
        }
        if (typeof(this.value) == 'function') { this.value() }
        if (typeof(this.value) == 'object' && this.attr != 'Skills') { this.value.updateScores() }
        this.fulfillRequirements()
        Player.changeAttr(this.attr,this.value)
        Party.changeAttr(this.attr,this.value)
    }
    deactivate() {
        if (Array.isArray(this.children)) {
            this.hideChildren()
        }
        if (this.conflicts) {
            this.conflictLet()
        }
        if (typeof(this.value) == 'function') { this.value() }
        this.removeRequirements()
        Player.revertAttr(this.attr,this.value)
        Party.revertAttr(this.attr,this.value)
    }
    showChildren() {
        for (let child of this.children) {
            if (child.includes('Header') || child.includes('Button')) { document.getElementById(child).style.display = 'block'}
            else if (child.includes('Para') || child.includes('Choice') || child.includes('Entry')) { document.getElementById(child).style.display = 'flex' }
            for (let chara of Object.keys(charaChoices)) {
                if (child.includes(chara) && child.includes('Choices')) {
                    let empty = true
                    for (let childchoice of document.getElementById(child).children) {
                        if (childchoice.style.display == 'flex') {
                            empty = false
                        }
                    }
                    if (empty) { document.getElementById(child).style.display = 'none' ; document.getElementById(child.replace('Choices','Header')).style.display = 'none'}
                }
            }
            for (let key of Object.keys(GlobalVisibilityData)) {
                for (let obj of Object.keys(GlobalVisibilityData[key])) {
                    if (child == obj) {
                        GlobalVisibilityData[key][child] = true
                    }
                }
            }
        }
        for (let category of Object.keys(GlobalVisibilityData)) {
            if (this.id == category) {
                for (let child of Object.keys(GlobalVisibilityData[category])) {
                    if (GlobalVisibilityData[category][child] == true) {
                        if (child.includes('Header')) { document.getElementById(child).style.display = 'block'} else if (child.includes('Para') || child.includes('Choice')) { document.getElementById(child).style.display = 'flex' }
                    }
                }
            }
        }
    }
    hideChildren() {
        for (let child of this.children) {
            document.getElementById(child).style.display = 'none'
            for (let key of Object.keys(GlobalVisibilityData)) {
                for (let obj of Object.keys(GlobalVisibilityData[key])) {
                    if (child == obj) {
                        GlobalVisibilityData[key][child] = false
                    }
                }
            }
        }
        for (let category of Object.keys(GlobalVisibilityData)) {
            if (this.id == category) {
                for (let child of Object.keys(GlobalVisibilityData[category])) {
                    if (GlobalVisibilityData[category][child] == true) {
                        document.getElementById(child).style.display = 'none'
                    }
                }
            }
        }
    }
    conflictBlock() {
        for (let conflict of this.conflicts) {
            document.getElementById(conflict).classList.add('disabled')
        }
    }
    conflictLet() {
        for (let conflict of this.conflicts) {
            document.getElementById(conflict).classList.remove('disabled')
        }
    }
    deactivateConflicts() {
        for (let conflict of Object.keys(this.conflicts)) {
            if (this.conflicts[conflict]['choices'][conflict].enabled == true) { this.conflicts[conflict].toggle(conflict) }
        }
    }
    fulfillRequirements() {
        if (this.requirementfor) {
            if (Array.isArray(this.requirementfor)) {
                for (let requirementforchoice of this.requirementfor) {
                    if (document.getElementById(requirementforchoice)) {
                        document.getElementById(requirementforchoice).style.display = 'flex'
                    }
                }
            } else {
                document.getElementById(this.requirementfor).style.display = 'flex'
            }
        }
    }
    removeRequirements() {
        if (this.requirementfor) {
            if (Array.isArray(this.requirementfor)) {
                for (let requirementforchoice of this.requirementfor) {
                    if (document.getElementById(requirementforchoice)) {
                        document.getElementById(requirementforchoice).style.display = 'none'
                    }
                }
            } else {
                document.getElementById(this.requirementfor).style.display = 'none'
            }
        }
    }
}
let ChoicesController = {
    choices: {},
    choiceContainers: {},
    deactivate(choiceID) {
        for (let choicecontainer in this.choices) {
            for (let choice of this.choices[choicecontainer]) {
                if (choiceID == choice) {
                    if (this.choiceContainers[choicecontainer].choices[choiceID].enabled == true) {
                        this.choiceContainers[choicecontainer].toggle(choiceID)
                        console.log(choiceID,' toggled')
                    } 
                }
            }
        }
    }
}
class Choices {
    constructor(id,name,limit = 1, display='flex',activeFunc='none') {
        this.id = id
        this.name = name
        this.limit = limit
        this.display = display
        this.activeFunc = activeFunc

        this.choices = {}
        this.selectedChoices = []
    }
    initialize(parent) {
        let choices = document.createElement('div')
        choices.id = this.id
        choices.className = 'section choice'
        choices.style.display = this.display
        ChoicesController.choices[this.id] = []
        for (let choiceID in this.choices) {
            ChoicesController.choices[this.id].push(choiceID)
            let choice = this.choices[choiceID].create()
            choice.addEventListener("click", () => this.toggle(choiceID))
            choices.appendChild(choice)
        }
        if (parent == undefined) { document.body.appendChild(choices) } else { document.getElementById(parent).appendChild(choices)}
        // ChoicesController.choiceContainers.push(this.id)
        // ChoicesController.choices[this.id]
    }
    add(choice) {
        this.choices[choice.id] = choice
    }
    toggle(choiceID) {
        if (this.choices[choiceID].enabled == true) {
            if (this.choices[choiceID].cost) {
                for (let currency in this.choices[choiceID].cost) {
                    if (currency == 'CustomisationPoints') {
                        Party.CustomisationPoints += this.choices[choiceID].cost[currency]
                        Party.SelectedCustomisations.splice(Party.SelectedCustomisations.indexOf(choiceID),1)
                        this.deactivate(choiceID)
                    }
                    if (currency == 'SkillPoints') {
                        Player.SkillPoints += this.choices[choiceID].cost[currency]
                        this.deactivate(choiceID)
                    }
                    if (currency == 'CharaSkillPoints') {
                        let currentchar = undefined
                        for (let char of Party.Characters) {
                            if (char.Name == this.choices[choiceID].character) {
                                currentchar = char
                            }
                        }
                        currentchar.CharaSkillPoints += this.choices[choiceID].cost[currency]
                        this.deactivate(choiceID)
                    }
                }
            } else {
                this.deactivate(choiceID)
            }
        } else if (this.choices[choiceID].enabled == false) {
            if (Object.keys(this.selectedChoices).length == this.limit) { this.toggle(this.selectedChoices[0]) }
            if (this.choices[choiceID].cost) {
                for (let currency in this.choices[choiceID].cost) {
                    if (currency == 'CustomisationPoints') {
                        if ((Party.CustomisationPoints - this.choices[choiceID].cost[currency]) >= 0) {
                        Party.CustomisationPoints -= this.choices[choiceID].cost[currency]
                        Party.SelectedCustomisations.push(choiceID)
                        this.activate(choiceID)
                        } else {
                            document.getElementById(choiceID).classList.add('error')
                            setTimeout(() => { document.getElementById(choiceID).classList.remove('error') }, 500)
                        }
                    }
                    if (currency == 'SkillPoints') {
                        if ((Player.SkillPoints - this.choices[choiceID].cost[currency]) >= 0) {
                            Player.SkillPoints -= this.choices[choiceID].cost[currency]
                            this.activate(choiceID)
                        } else {
                            document.getElementById(choiceID).classList.add('error')
                            setTimeout(() => { document.getElementById(choiceID).classList.remove('error') }, 500)
                        }
                    }
                    if (currency == 'CharaSkillPoints') {
                        let currentchar = undefined
                        for (let char of Party.Characters) {
                            if (char.Name == this.choices[choiceID].character) {
                                currentchar = char
                            }
                        }
                        if ((currentchar.CharaSkillPoints - this.choices[choiceID].cost[currency]) >= 0) {
                        currentchar.CharaSkillPoints -= this.choices[choiceID].cost[currency]
                        this.activate(choiceID)
                        } else {
                            document.getElementById(choiceID).classList.add('error')
                            setTimeout(() => { document.getElementById(choiceID).classList.remove('error') }, 500)
                        }
                    }
                }
            } else {
                this.activate(choiceID)
            }
        }
        if (this.activeFunc != 'none') { this.activeFunc() }
    }
    activate(choiceID) {
        this.choices[choiceID].enabled = true
        this.choices[choiceID].activate()
        this.selectedChoices.push(choiceID)
        document.getElementById(choiceID).classList.add('selected')
    }
    deactivate(choiceID) {
        this.choices[choiceID].enabled = false
        this.choices[choiceID].deactivate()
        if (this.selectedChoices.indexOf(choiceID) > -1 ) { this.selectedChoices.splice(this.selectedChoices.indexOf(choiceID),1) }
        document.getElementById(choiceID).classList.remove('selected')
    }
}
class CharacterOptionsDisplay {
    constructor(id,name,type,display='flex') {
        this.id = id
        this.name = name
        this.display = display
        this.type = type

        return this.initialize()
    }
    initialize() {
        let choices = document.createElement('div')
        choices.id = this.id
        choices.className = 'section choice'
        choices.style.display = this.display

        return choices
    }
    add(choice) {
        this.choices[choice.id] = choice
    }
}
class CharacterChoice {
    constructor(id,character,name,text,image,attr,value,children,conflicts,requirement,type = 'small',imgPos = 'left',display = 'flex',cost = false) {
        this.id = id
        this.character = character
        this.name = name
        if (text != false) { this.text = text } else { this.text = '' }
        if (image==false) {this.image = 'PlaceholderImage.png'} else {this.image = image}
        this.attr = attr
        this.value = value
        this.children = children
        this.conflicts = conflicts
        this.requirement = requirement
        this.type = type
        this.imgPos = imgPos
        this.display = display
        this.cost = cost

        this.enabled = false
    }
    create() {
        let choice = document.createElement('div')
        choice.id = this.id
        choice.tabIndex = '0'
        if (this.type == 'small') {
            choice.className = 'image small choice'
            choice.innerHTML = `
            <h3>${this.name}</h3>
            <img class="image choice" src="Images/${this.image}">
            <p>${this.text}</p>
            `
        } else if (this.type == 'large') {
            choice.className = 'image large choice'
            choice.innerHTML = `
            <img class="image choice" src="Images/${this.image}">
            <div>
                <h3>${this.name}</h3>
                <p>${this.text}</p>
            </div>
            `
        }
        choice.setAttribute('activation','inactive')
        choice.style.display = this.display
        return choice
    }
    activate() {
        if (Array.isArray(this.children)) {
            this.showChildren()
        }
        for (let chara in Player.Characters) {
            if (Player.Characters[chara].Name == this.character) {
                Player.Characters[chara].changeAttr(this.attr,this.value)
            }
        }
    }
    deactivate() {
        if (Array.isArray(this.children)) {
            this.hideChildren()
        }
        for (let chara in Player.Characters) {
            if (Player.Characters[chara].Name == this.character) {
                Player.Characters[chara].revertAttr(this.attr,this.value)
            }
        }
    }
    showChildren() {
        for (let child of this.children) {
            if (child.includes('Header')) { document.getElementById(child).style.display = 'block'} else if (child.includes('Para') || child.includes('Choice')) { document.getElementById(child).style.display = 'flex' }
        }
    }
    hideChildren() {
        for (let child of this.children) {
            document.getElementById(child).style.display = 'none'
        }
    }
}
class Character{
    constructor(Name,Nationality,Vision,Ascension,Weapon,Gender,Genitals,EyeColour,SkinColour,HairColour,HairLength,Height,Breasts,Ass,Role,Synergies,Orientation,Seal,Kinks,Skills = [1,1,1,1], Info = ['Lore','Sexual History','Kinks','Synergies']) {
        this.Type = 'Character'
        this.Name = Name
        this.Nationality = Nationality
        this.Vision = Vision
        this.Ascension = Ascension
        this.Weapon = Weapon
        this.Gender = Gender
        this.Genitals = Genitals
        this.EyeColour = EyeColour
        this.SkinColour = SkinColour
        this.HairColour = HairColour
        this.HairLength = HairLength
        this.Height = Height
        this.Breasts = Breasts
        this.Ass = Ass
        this.Role = Role
        this.TeamBuildingActivities = []
        this.Synergies = Synergies
        this.Orientation = Orientation
        this.Seal = Seal
        this.Kinks = Kinks
        this.Skills = {
            'Oral': Skills[0],
            'Genital': Skills[1],
            'Anal': Skills[2],
            'Other': Skills[3],
        }
        this.SkillPoints = 0
        this.Info = {
            'Lore': Info[0],
            'Sexual History': Info[1],
            'Kinks': Info[2],
            // 'Synergies': Info[3],
            'Body Characteristics': [
                new OverlayHeader('BodyCharacteristicsTitle','Body Characteristics','','small'),
                new OverlayPara(`BodyCharacteristics${this.Name}`,`${this.Name}'s Body`,`
                Breasts: ${this.Breasts}<br>
                Ass: ${this.Ass}<br>
                Genitals: ${this.Genitals}<br>
                Eye Colour: ${this.EyeColour}<br>
                Skin Colour: ${this.SkinColour}<br>
                Hair Colour: ${this.HairColour}<br>
                Hair Length: ${this.HairLength}<br>
                Height: ${this.Height}<br>
                `,`Characters/${this.Name}/Nude.png`,'flex','space'),
                // new CharacterOptionsDisplay(`BodyCharacteristics${this.Name}`,`${this.Name}'s Body`,'body')
        ]
        }
        this.KinkMatchScore = 0
        this.CharaMatchScore = 0
        this.Characters = []
        this.CharaSkillPoints = 0

        this.Defaults = {
            Name: Name,
            Nationality: Nationality,
            Vision: Vision,
            Ascension: Ascension,
            Weapon: Weapon,
            Gender: Gender,
            Genitals: Genitals,
            EyeColour: EyeColour,
            SkinColour: SkinColour,
            HairColour: HairColour,
            HairLength: HairLength,
            Height: Height,
            Breasts: Breasts,
            Ass: Ass,
            Role: Role,
            Synergies: Synergies,
            Orientation: Orientation,
            Seal: Seal,
            Kinks: Kinks,
            Skills: {
                'Oral': Skills[0],
                'Genital': Skills[1],
                'Anal': Skills[2],
                'Other': Skills[3],
            },
        }
    }
    changeAttr(attr,value) {
        if (typeof(this[attr]) == 'string') {
            this[attr] = value
            if (this.Type == 'Character') {
                this.Info['Body Characteristics'] = [
                    new OverlayHeader('BodyCharacteristicsTitle','Body Characteristics','','small'),
                    new OverlayPara(`BodyCharacteristics${this.Name}`,`${this.Name}'s Body`,`
                    Breasts: ${this.Breasts}<br>
                    Ass: ${this.Ass}<br>
                    Genitals: ${this.Genitals}<br>
                    Eye Colour: ${this.EyeColour}<br>
                    Skin Colour: ${this.SkinColour}<br>
                    Hair Colour: ${this.HairColour}<br>
                    Hair Length: ${this.HairLength}<br>
                    Height: ${this.Height}<br>
                    `,`Characters/${this.Name}/Nude.png`,'flex','space'),
                    // new CharacterOptionsDisplay(`BodyCharacteristics${this.Name}`,`${this.Name}'s Body`,'body')
            ]
            }
        } else if (typeof(this[attr]) == 'object') {
            if (attr == 'Skills') {
                this[attr][Object.keys(value)[0]] = value[Object.keys(value)]
            } else {
                this[attr].push(value)
            }
        } else if (typeof(this[attr]) == 'number') {
            this[attr] = value
        }

    }
    revertAttr(attr,value) {
        if (typeof(this[attr]) == 'string') {
            this[attr] = this.Defaults[attr]
        } else if (typeof(this[attr]) == 'object') {
            if (attr == 'Skills') {
                this[attr][Object.keys(value)[0]] = this.Defaults[attr][Object.keys(value)[0]]
            } else {
                this[attr].splice(this[attr].indexOf(value),1)
            }
        } else if (typeof(this[attr]) == 'number') {
            this[attr] = this.Defaults[attr]
        } 
    }
    updateScores() {
        if (this.Type == 'Character') {
            this.KinkMatchScore = 0
            this.CharaMatchScore = 0
            for (let kink of this.Kinks) {
                for (let playerKink of Player.Kinks) {
                    if (kink == playerKink) { this.KinkMatchScore += 1}
                }
            }
            for (let synergy of this.Synergies) {
                for (let chara of Player.Characters) {
                    if (synergy == chara.Name) { this.CharaMatchScore += 1 }
                }
            }
        }
        if (this.Type == 'Player') {
            this.SkillPoints = this.Ascension - 1
        }
        if (this.Type == 'Character') {
            this.CharaSkillPoints = this.Ascension - this.Defaults['Ascension']
        }
    }
}
let Party = {
    Characters: [],
    Resonances: [],
    TeamBuildingActivities: [],
    TeamRoles: {
        'Selfish Main':0,
        'Supportive Main': 0,
        'Focused Support': 0,
        'Team Support': 0,
        'Not Selected': 0,
    },
    TeamComposition: false,
    Scores: {
        'TeamComposition':0,
        'MatchedKinks':0,
        'MatchedCharas':0,
        'Resonances':0,
        'TeamActivities':0
    },
    TeamRating: 0,
    TeamTier: 1,
    CustomisationMax: 0,
    CustomisationPoints: 0,
    SelectedCustomisations: [],
    updateAllScores() {
        let charas = {
            'CharactersKokomi': SangonomiyaKokomi,
            'CharactersNilou': Nilou,
            'CharactersEi': Ei,
            'CharactersKeqing': Keqing,
            'CharactersGanyu': Ganyu,
            'CharactersYoimiya': Yoimiya,
            'CharactersKujouSara': KujouSara,
            'CharactersCollei': Collei,
            'CharactersCandace': Candace,
            'CharactersDehya': Dehya,
            'CharactersNingguang': Ningguang,
            'CharactersBeidou': Beidou,
            'CharactersJean': Jean,
            'CharactersBarbara': Barbara,
            'CharactersLisa': Lisa,
        }
        for (let chara of Object.keys(charas)) {
            charas[chara].updateScores()
            // if (charas[chara].KinkMatchScore >= 1 || charas[chara].CharaMatchScore >= 1) {
            //     document.getElementById(chara).classList.add(`match${charas[chara].Vision}`)
            // } else {
            //     document.getElementById(chara).classList.remove(`match${charas[chara].Vision}`)
            // }
        }
        let count = {
            'Anemo': 0,
            'Geo': 0,
            'Electro': 0,
            'Dendro': 0,
            'Hydro': 0,
            'Pyro': 0,
            'Cryo': 0,
        }
        for (let element of Object.keys(count)) {
            count[element] = 0
            for (let chara of Player.Characters) {
                if (chara.Vision == element) {
                    count[element] += 1
                }
            }
        }
        Party.Resonances = []
        for (let element of Object.keys(count)) {
            if (count[element] >= 2) {
                Party.Resonances.push(element)
            }
        }

        // Add Scores
        Party.Scores = {
            'TeamComposition':0,
            'MatchedKinks':0,
            'MatchedCharas':0,
            'Resonances':0,
            'TeamActivities':0
        }
        Party.TeamRoles = {
            'Selfish Main':0,
            'Supportive Main': 0,
            'Focused Support': 0,
            'Team Support': 0,
            'Not Selected': 0,
        }
        Party.TeamRating = 0
        for (let chara of Party.Characters) {
            // console.log(chara)
            Party.Scores['MatchedKinks'] += chara.KinkMatchScore
            Party.Scores['MatchedCharas'] += chara.CharaMatchScore
            Party.TeamRoles[chara.Role] += 1
        }
        if (Party.Characters.length == 4) {
            if (Party.TeamRoles['Not Selected'] == 0) {
                if (Party.TeamRoles['Selfish Main'] == 1 && Party.TeamRoles['Supportive Main'] == 0) { Party.TeamComposition = 'Hypercarry' }
                else if (Party.TeamRoles['Supportive Main'] == 1 && Party.TeamRoles['Selfish Main'] == 0) { Party.TeamComposition = 'Balanced Power' }
                else if (Party.TeamRoles['Focused Support'] == 0 && Party.TeamRoles['Team Support'] == 0) { Party.TeamComposition = 'Power Distributed' }
                else if (Party.TeamRoles['Selfish Main'] == 0 && Party.TeamRoles['Supportive Main'] == 0) { Party.TeamComposition = 'Support All' }
                else { Party.TeamComposition = false }
            }
        }
        if (Party.TeamComposition != false) {
            if (Party.TeamComposition == 'Hypercarry' || Party.TeamComposition == 'Balanced Power') { Party.Scores['TeamComposition'] += 2 }
            else if (Party.TeamComposition == 'Power Distributed' || Party.TeamComposition == 'Support All') { Party.Scores['TeamComposition'] += 1 }
        }
        Party.Scores['Resonances'] += Party.Resonances.length*2
        Party.Scores['TeamActivities'] += Party.TeamBuildingActivities.length
        
        for (let score in Party.Scores) {
            Party.TeamRating += Party.Scores[score]
        }

        // Team Tier
        if (Party.TeamRating >= 15) { Party.TeamTier = 3 } else if (Party.TeamRating >= 8) { Party.TeamTier = 2 } else if (Party.TeamRating >= 0) { Party.TeamTier = 1 }

        // Customisation Points
        Party.CustomisationMax = 3*Party.TeamTier
        Party.CustomisationPoints = Party.CustomisationMax - Party.SelectedCustomisations.length
    },
    changeAttr(attr,value) {
        if (typeof(this[attr]) == 'string') {
            this[attr] = value
        } else if (typeof(this[attr]) == 'object') {
            this[attr].push(value)
        }
    },
    revertAttr(attr,value) {
        if (typeof(this[attr]) == 'string') {
            this[attr] = 'Not Selected'
        } else if (typeof(this[attr]) == 'object') {
            this[attr].splice(this[attr].indexOf(value),1)
        }
    },
    checkLifeChoices() {
        let tiers = {
            1: ['LifeAdventuring1','LifeShop1','LifeCity1','LifeWild1'],
            2: ['LifeAdventuring2','LifeShop2','LifeCity2','LifeWild2'],
            3: ['LifeAdventuring3','LifeShop3','LifeCity3','LifeWild3']
        }
        for (let tier in tiers) {
            if (tier <= Party.TeamTier) {
                for (let choiceID of tiers[tier]) {
                    document.getElementById(choiceID).classList.remove('disabled')
                }
            } else {
                for (let choiceID of tiers[tier]) {
                    ChoicesController.deactivate(choiceID)
                    document.getElementById(choiceID).classList.add('disabled')
                }
            }
        }
    }
}
let CharacterMenu = {
    shown: false,
    overlayShown: false,
    activeOverlay: 'none',
    initMenu() {
        this.menu = document.createElement('div')
        this.menu.id = 'CharacterMenu'
        this.menu.className = 'CharacterMenu'
        document.body.appendChild(this.menu)

        this.infoOverlay = document.createElement('div')
        this.infoOverlay.id = 'InfoOverlay'
        this.infoOverlay.className = 'CharacterMenu Overlay'
    },
    initData() {
        let ascensionText = `&#9671 &#9671 &#9671 &#9671 &#9671 &#9671 ${this.activeCharacter.Ascension}`
        for (let i = 0; i < this.activeCharacter.Ascension ; i++) {
            ascensionText = ascensionText.replace('&#9671','&#9672')
        }
        let CharaIcons = ``
        for (let chara of Player.Characters) {
            if (chara.Type == 'Character') {
                CharaIcons += `<img class="icon chara" id="icon ${chara.Name}" src="Images/Character Icons/${chara.Name}.png">`
            } else if (chara.Type == 'Player') {
                CharaIcons += `<img class="icon chara" id="icon ${chara.Name}" src="Images/Character Icons/${chara.Gender}.png">`
            }
        }
        let InfoButtons = ` `
        if (this.activeCharacter.Type == 'Character') { 
            InfoButtons = `
        <div class="CharaPanels" id="InfoButtons">
            <h1 id="Body Characteristics">&#9671 Body Characteristics</h1>
            <h1 id="Lore">&#9671 Lore</h1>
            <h1 id="Sexual History">&#9671 Sexual History</h1>
            <h1 id="Kinks">&#9671 Kinks</h1>
            </div>
            `
            // <h1 id="Synergies">&#9671 Synergies</h1>
        }
        let backgroundImage = ``
        if (this.activeCharacter.Type == 'Character') { backgroundImage = `Images/Characters/${this.activeCharacter.Name}/Splash.png` }
        else if (this.activeCharacter.Type == 'Player') { backgroundImage = `Images/Splash${this.activeCharacter.Gender}.png` }
        if (this.activeCharacter.Gender == 'Not Selected') { backgroundImage = `WebsiteAssets/PartyBackground.png` }
        let kinks = ''
        for (let kink of this.activeCharacter.Kinks) {
            kinks += `${kink}, `
        }
        kinks = kinks.substring(0, kinks.length - 2)
        synergies = ''
        for (let synergy of this.activeCharacter.Synergies) {
            synergies += `${synergy}, `
        }
        synergies = synergies.substring(0, synergies.length - 2)
        this.menu.innerHTML = `
        <img class="background" id="CharaBackground" src="${backgroundImage}">
        <div class="CharaPanels" id="CharaIcons">
            ${CharaIcons}
        </div>
        ${InfoButtons}
        <div class="CharaPanels" id="OverallInfo">
            <h1>${this.activeCharacter.Name}</h1>
            <h2>Ascension: ${ascensionText}</h2>
            <h2>${this.activeCharacter.Role} - ${this.activeCharacter.Weapon}</h2>
            <h2>${this.activeCharacter.Nationality} - ${this.activeCharacter.Vision}</h2>
            <hr>
            <h2>Synergy: ${synergies}</h2>
            <h2>Dynamic: ${this.activeCharacter.Orientation}</h2>
            <h2>Seal: ${this.activeCharacter.Seal}</h2>
            <h2>Kinks: ${kinks}</h2>
            <h1>Sexual Skills</h1>
            <h2>Oral - ${this.activeCharacter.Skills['Oral']}</h2>
            <h2>Genital - ${this.activeCharacter.Skills['Genital']}</h2>
            <h2>Anal - ${this.activeCharacter.Skills['Anal']}</h2>
            <h2>Other - ${this.activeCharacter.Skills['Other']}</h2>
        </div>
        `

        // old skill div with icons
        // <div class="skills">
        //         <div class="skillIcon">
        //             <img class="icon one" src="WebsiteAssets/SkillHydro.png">
        //             <img class="icon one" src="WebsiteAssets/SkillOral.png">
        //         </div>
        //         <div class="skill">
        //             <h2>Oral - ${this.activeCharacter.Skills['Oral']}</h2>
        //         </div>
        //         <div class="skillIcon">
        //             <img class="icon one" src="WebsiteAssets/SkillHydro.png">
        //             <img class="icon one" src="WebsiteAssets/SkillPussy.png">
        //         </div>
        //         <div class="skill">
        //             <h2>Genital - ${this.activeCharacter.Skills['Genital']}</h2>
        //         </div>
        //         <div class="skillIcon">
        //             <img class="icon one" src="WebsiteAssets/SkillHydro.png">
        //             <img class="icon one" src="WebsiteAssets/SkillPussy.png">
        //         </div>
        //         <div class="skill">
        //             <h2>Anal - ${this.activeCharacter.Skills['Anal']}</h2>
        //         </div>
        //         <div class="skillIcon">
        //             <img class="icon one" src="WebsiteAssets/SkillHydro.png">
        //             <img class="icon one" src="WebsiteAssets/SkillPussy.png">
        //         </div>
        //         <div class="skill">
        //             <h2>Other - ${this.activeCharacter.Skills['Other']}</h2>
        //         </div>
        //     </div>
        // </div>
        for (let chara of Player.Characters) {
            CharaIcons += `<img class="icon chara" id="icon ${chara.Name}" src="Images/Character Icons/${chara.Name}.png">`
            document.getElementById(`icon ${chara.Name}`).addEventListener('click',() => {this.changeActiveCharacter(chara)})
        }
        if (this.activeCharacter.Type == 'Character') {
            for (let info in this.activeCharacter.Info) {
                document.getElementById(info).addEventListener('click',() => { this.toggleOverlay(info) })
            }
        }
        this.menu.insertBefore(this.infoOverlay,document.getElementById('CharaIcons'))
        this.initOverlay()
    },
    initOverlay() {
        if (this.activeCharacter.Type == 'Character') {
            let infoOverlayContent = document.createElement('div')
            infoOverlayContent.className = 'overlayContent'
            let infoBodyCharacteristics = document.createElement('div')
            let infoLore = document.createElement('div')
            let infoSexHistory = document.createElement('div')
            let infoKinks = document.createElement('div')
            let infoSynergies = document.createElement('div')
            this.info = {
                'Body Characteristics': infoBodyCharacteristics,
                'Lore': infoLore,
                'Sexual History': infoSexHistory,
                'Kinks': infoKinks,
                'Synergies': infoSynergies,
            }
            for (let category in this.info) {
                for (let module in this.activeCharacter.Info[category]) {
                    if (category == 'Kinks' && this.activeCharacter.Info[category][module].style.display == 'none' && this.activeCharacter.Kinks.includes(this.activeCharacter.Info[category][module].id)) {
                        this.activeCharacter.Info[category][module].style.display = 'flex'
                    } else if (category == 'Kinks' && this.activeCharacter.Kinks.includes(this.activeCharacter.Info[category][module].id) == false && module > 3) {
                        this.activeCharacter.Info[category][module].style.display = 'none'
                    }
                    this.info[category].appendChild(this.activeCharacter.Info[category][module])
                    // if (category == 'Body Characteristics') {
                    //     let height = ''
                    //     if ([`5'0`,`5'1`,`5'2`,`5'3`].includes(this.activeCharacter.Height)) { height = 'Short'}
                    //     else if ([`5'4`,`5'5`,`5'6`,`5'7`].includes(this.activeCharacter.Height)) { height = 'Average'}
                    //     else if ([`5'8`,`5'9`,`6'0`,`6'1`].includes(this.activeCharacter.Height)) { height = 'Tall'}
                    //     if (this.activeCharacter.Info[category][module].id == `BodyCharacteristics${this.activeCharacter.Name}`) {
                    //         this.activeCharacter.Info[category][module].innerHTML = `
                    //         <div id="${this.activeCharacter.Name}Breasts${this.activeCharacter.Breasts}" tabindex="0" class="image small" style="display: flex;">
                    //             <h3>${this.activeCharacter.Breasts} Breasts</h3>
                    //             <img class="image choice" src="Images/Character Creation/Breasts_${this.activeCharacter.Breasts}.jpg">
                    //         </div>
                    //         <div id="${this.activeCharacter.Name}Ass${this.activeCharacter.Ass}" tabindex="0" class="image small" style="display: flex;">
                    //             <h3>${this.activeCharacter.Ass} Ass</h3>
                    //             <img class="image choice" src="Images/Character Creation/Ass_${this.activeCharacter.Ass}.jpg">
                    //         </div>
                    //         <div id="${this.activeCharacter.Name}Genitals${this.activeCharacter.Genitals}" tabindex="0" class="image small" style="display: flex;">
                    //             <h3>${this.activeCharacter.Genitals}</h3>
                    //             <img class="image choice" src="Images/Character Creation/Genitals_${this.activeCharacter.Genitals}.jpg">
                    //         </div>
                    //         <div id="${this.activeCharacter.Name}Height${height}" tabindex="0" class="image small" style="display: flex;">
                    //             <h3>${height} Height</h3>
                    //             <img class="image choice" src="Images/Character Creation/Height_${height}.jpg">
                    //         </div>
                    //         <div id="${this.activeCharacter.Name}EyeColour${this.activeCharacter.EyeColour}" tabindex="0" class="image small" style="display: flex;">
                    //             <h3>${this.activeCharacter.EyeColour} Eyes</h3>
                    //             <img class="image choice" src="Images/Character Creation/EyeColour_${this.activeCharacter.EyeColour}.jpg">
                    //         </div>
                    //         <div id="${this.activeCharacter.Name}SkinColour${this.activeCharacter.SkinColour}" tabindex="0" class="image small" style="display: flex;">
                    //             <h3>${this.activeCharacter.SkinColour} Skin</h3>
                    //             <img class="image choice" src="Images/Character Creation/SkinColour_${this.activeCharacter.SkinColour}.jpg">
                    //         </div>
                    //         <div id="${this.activeCharacter.Name}HairColour${this.activeCharacter.HairColour}" tabindex="0" class="image small" style="display: flex;">
                    //             <h3>${this.activeCharacter.HairColour} Hair</h3>
                    //             <img class="image choice" src="Images/Character Creation/HairColour_${this.activeCharacter.HairColour}.jpg">
                    //         </div>
                    //         <div id="${this.activeCharacter.Name}HairLength${this.activeCharacter.HairLength}" tabindex="0" class="image small" style="display: flex;">
                    //             <h3>${this.activeCharacter.HairLength} Length Hair</h3>
                    //             <img class="image choice" src="Images/Character Creation/HairLength_${this.activeCharacter.HairLength}.jpg">
                    //         </div>
                    //         `
                    //     }
                    // }
                }
                infoOverlayContent.appendChild(this.info[category])
                if (category == 'Body Characteristics') {
                    // document.getElementById(`BodyCharacteristics${this.activeCharacter.Name}`).innerHTML = `
                    // <div id="BreastsAverage" tabindex="0" class="image small" style="display: flex;">
                    //     <h3>Average</h3>
                    //     <img class="image choice" src="Images/Character Creation/Breasts_Average.jpg">
                    // </div>
                    // `
                }
            }
            this.infoOverlay.appendChild(infoOverlayContent)
        }
    },
    toggleMenu() {
        if (this.shown == false) {
            this.showMenu()
        } else if (this.shown == true) {
            this.hideMenu()
        }
    },
    showMenu() {
        this.shown = true
        this.activeCharacter = Player
        this.initData()
        PartyMenu.hideMenu()
        document.getElementById('CharacterMenu').classList.add('shown')
    },
    hideMenu() {
        this.shown = false
        document.getElementById('CharacterMenu').classList.remove('shown')
        this.hideOverlay()
    },
    toggleOverlay(category) {
        for (let match in this.info) {
            if (match == category) { this.info[match].style.display = 'block' } else if (match != category) { this.info[match].style.display = 'none' }
        }
        if (this.overlayShown == false) {
            this.showOverlay()
        } else if (this.overlayShown == true && this.activeOverlay == category) {
            this.hideOverlay()
        }
        document.getElementById('InfoOverlay').scrollTo(0,0)
        this.activeOverlay = category
    },
    showOverlay() {
        this.overlayShown = true
        document.getElementById('InfoOverlay').classList.add('shown')
    },
    hideOverlay() {
        this.overlayShown = false
        document.getElementById('InfoOverlay').classList.remove('shown')
    },
    changeActiveCharacter(chara) {
        this.activeCharacter = chara
        this.hideOverlay()
        this.initData()
        this.infoOverlay.innerHTML = ``
        this.initOverlay()
    }
}
let PartyMenu = {
    shown: false,
    Resonances: {
        'Anemo': new OverlayPara('ResonanceAnemo','Anemo Resonance','Everyone in your team has higher sexual stamina, letting them perform optimally for hours similar to the Stamina Seal.','Party/ResonanceAnemo.jpg','none'),
        'Geo': new OverlayPara('ResonanceGeo','Geo Resonance','Everyone in your team has more resilient bodies, allowing for rougher sex especially with larger objects.','Party/ResonanceGeo.png','none'),
        'Electro': new OverlayPara('ResonanceElectro','Electro Resonance','Everyone in your team has their refractory periods reduced, letting them orgasm multiple times in quicker succession.','Party/ResonanceElectro.png','none'),
        'Dendro': new OverlayPara('ResonanceDendro','Dendro Resonance','Sex with beasts, hilichurls, and other monsters becomes much more pleasurable and common for everyone in your team.','Party/ResonanceDendro.png','none'),
        'Hydro': new OverlayPara('ResonanceHydro','Hydro Resonance','Sex becomes a healing activity, rejuvenating spirits and healing wounds for everyone in your team.','Party/ResonanceHydro.png','none'),
        'Pyro': new OverlayPara('ResonancePyro','Pyro Resonance','Sex becomes much more emotionally intense and passionate for everyone in your team.','Party/ResonancePyro.png','none'),
        'Cryo': new OverlayPara('ResonanceCryo','Cryo Resonance','Orgasms triple in length extending the pleasure peak for everyone in your team.','Party/ResonanceCryo.jpg','none'),
    },
    TeamCompositions: {
        'Hypercarry': new OverlayPara('TeamCompositionHypercarry','Hypercarry','Your party fits the Hypercarry team composition.','PlaceholderImage.png','none'),
        'Balanced Power': new OverlayPara('TeamCompositionBalanced Power','Balanced Power','Your party fits the Balanced Power team composition.','PlaceholderImage.png','none'),
        'Power Distributed': new OverlayPara('TeamCompositionPower Distributed','Power Distributed','Your party fits the Power Distributed team composition.','PlaceholderImage.png','none'),
        'Support All': new OverlayPara('TeamCompositionSupport All','Support All','Your party fits the Support All team composition.','PlaceholderImage.png','none')
    },
    initMenu() {
        this.menu = document.createElement('div')
        this.menu.id = 'PartyMenu'
        this.menu.className = 'PartyMenu'
        document.body.appendChild(this.menu)
    },
    initData() {
        
        let PartyPanes = ``
        let TeamComp = 'None'
        if (Party.TeamComposition != false) {TeamComp = Party.TeamComposition} else {TeamComp = 'None'}
        this.menu.innerHTML = `
        <img class="background" id="PartyBackground" src="WebsiteAssets\\PartyBackground.png">
        <div class="PartyIconLayout" id="PartyPanes">
            
        </div>
        <div class="CharaPanels" id="PartyInfo">
            <div class="overlayContent" id="PartyContent">
                <div class="section">
                    <div>
                        <h2>Team Rating</h2>
                        <p>Team Tier: ${Party.TeamTier}<br>Current Team Rating: ${Party.TeamRating}<br>being the sum of your<br>Team Composition - ${TeamComp}: ${Party.Scores['TeamComposition']}<br>Matched Kinks: ${Party.Scores['MatchedKinks']}<br>Matched Character Synergies: ${Party.Scores['MatchedCharas']}<br>Elemental Resonance: ${Party.Scores['Resonances']}<br>Team Activities: ${Party.Scores['TeamActivities']}</p>
                    </div>
                </div>
            </div
        </div>
        `
        for (let chara of Party.Characters) {
            if (chara.Type == "Character") {
                let pane = document.createElement('img')
                pane.className = "PartyPane"
                pane.src = `Images/Characters/${chara.Name}/PartyPane.jpg`
                pane.addEventListener('click', () => {
                    CharacterMenu.toggleMenu()
                    CharacterMenu.changeActiveCharacter(chara)
                })
                document.getElementById('PartyPanes').appendChild(pane)
                // PartyPanes += `<img src="Images/Characters/${chara.Name}/PartyPane.jpg" class="PartyPane">`
            }
        }
        for (let element of Object.keys(this.Resonances)) {
            document.getElementById("PartyContent").appendChild(this.Resonances[element])
        }
        for (let TeamComp of Object.keys(this.TeamCompositions)) {
            document.getElementById("PartyContent").appendChild(this.TeamCompositions[TeamComp])
        }
        for (let element of Object.keys(PartyMenu.Resonances)) {
            if (Party.Resonances.includes(element)) {
                document.getElementById(`Resonance${element}`).style.display = 'flex'
            } else {
                document.getElementById(`Resonance${element}`).style.display = 'none'
            }
        }
        if (Party.TeamComposition != false) {
            document.getElementById(`TeamComposition${Party.TeamComposition}`).style.display = 'flex'
        }
    },
    toggleMenu() {
        if (this.shown == false) {
            this.showMenu()
        } else if (this.shown == true) {
            this.hideMenu()
        }
    },
    showMenu() {
        this.shown = true
        this.activeCharacter = Player
        this.initData()
        CharacterMenu.hideMenu()
        document.getElementById('PartyMenu').classList.add('shown')
    },
    hideMenu() {
        this.shown = false
        document.getElementById('PartyMenu').classList.remove('shown')
        this.hideOverlay()
    },
    hideOverlay() {

    }
}
let PointsMenu = {
    shown: false,
    initMenu() {
        this.menu = document.createElement('div')
        this.menu.id = 'PointsMenu'
        this.menu.className = 'PointsMenu'
        document.body.appendChild(this.menu)
    },
    initData() {
        this.menu.innerHTML = `
        <div class="section">
            <div>
                <h2>Points</h2>
                <p>Player Skill Points: ${Player.SkillPoints}<br><br>Team Tier: ${Party.TeamTier}<br>Current Team Rating: ${Party.TeamRating}<br><br>Customisation Points Alloted: ${Party.CustomisationMax}<br>Customisation Points Left: ${Party.CustomisationPoints}
            </div>
        </div>
        `
    },
    toggleMenu() {
        if (this.shown == false) {
            this.showMenu()
        } else if (this.shown == true) {
            this.hideMenu()
        }
    },
    showMenu() {
        this.shown = true
        this.activeCharacter = Player
        this.initData()
        document.getElementById('PointsMenu').classList.add('shown')
    },
    hideMenu() {
        this.shown = false
        document.getElementById('PointsMenu').classList.remove('shown')
        this.hideOverlay()
    },
    hideOverlay() {

    }
}
let CharacterCustomisation = {
    shown: false,
    toggleCharacters() {
        if (this.shown == false) { this.showCharacters() ; this.shown = true} else if (this.shown == true) { this.hideCharacters() ; this.shown = false}
    },
    showCharacters() {
        document.getElementById('CustomisationContainer').innerHTML = ''
        if (Party.Characters.length > 1) {
            CharaButtons = {}
            this.CharacterCustomisationChoice = new Choices('CharacterCustomisationChoice','Character Customisation Choice',1)
            for (let chara of Party.Characters) {
                if (chara.Type == 'Character') {
                    console.log(chara.Name)
                    CharaButtons[chara.Name] = new Choice(`CharacterCustomisation${chara.Name}`,chara.Name,false,`Characters/${chara.Name}/Profile.jpg`,'CharaCustomisationChoice',chara.Name,false,false,false,'small')
                    this.CharacterCustomisationChoice.add(CharaButtons[chara.Name])
                }
            }
            this.CharacterCustomisationChoice.initialize('CustomisationContainer')

            document.getElementById('CustomisationContainer').style.display = 'block'
        }
    },
    hideCharacters() {
        if (Party.Characters.length > 1) {
            for (let choice in this.CharacterCustomisationChoice.choices) {
                if (this.CharacterCustomisationChoice.choices[choice].enabled == true) { this.CharacterCustomisationChoice.toggle(choice) }
            }
            document.getElementById('CustomisationContainer').style.display = 'none'
        }
    },
    initCharacterChoices() {

    }
}
// let CharacterSummaryMenu = {
//     shown: false,
//     initMenu() {
//         this.menu = document.createElement('div')
//         this.menu.id = 'CharacterSummaryMenu'
//         this.menu.className = 'CharacterSummaryMenu'
//         document.body.appendChild(this.menu)
//     },
//     initData() {
//         this.menu.innerHTML = `
//         <div class="section">
//             <div>
//                 <h2>Points</h2>
//                 <p>Player Skill Points: ${Player.SkillPoints}<br><br>Team Tier: ${Party.TeamTier}<br>Current Team Rating: ${Party.TeamRating}<br><br>Customisation Points Alloted: ${Party.CustomisationMax}<br>Customisation Points Used: ${Party.CustomisationPoints}
//             </div>
//         </div>
//         `
//     },
//     toggleMenu() {
//         if (this.shown == false) {
//             this.showMenu()
//         } else if (this.shown == true) {
//             this.hideMenu()
//         }
//     },
//     showMenu() {
//         this.shown = true
//         this.activeCharacter = Player
//         this.initData()
//         document.getElementById('CharacterSummaryMenu').classList.add('shown')
//     },
//     hideMenu() {
//         this.shown = false
//         document.getElementById('CharacterSummaryMenu').classList.remove('shown')
//         this.hideOverlay()
//     },
//     hideOverlay() {

//     }
// }
