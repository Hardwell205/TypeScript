var FieldType;
(function (FieldType) {
    FieldType[FieldType["Imie"] = 1] = "Imie";
    FieldType[FieldType["Nazwisko"] = 2] = "Nazwisko";
    FieldType[FieldType["Mail"] = 3] = "Mail";
    FieldType[FieldType["Select"] = 4] = "Select";
    FieldType[FieldType["Checkbox"] = 5] = "Checkbox";
    FieldType[FieldType["Uwagi"] = 6] = "Uwagi";
})(FieldType || (FieldType = {}));
var NameFiled = /** @class */ (function () {
    function NameFiled(name, label) {
        this.element = document.createElement('input');
        this.name = name;
        this.label = label;
        this.element.name = this.name;
    }
    NameFiled.prototype.render = function () {
        return this.element;
    };
    NameFiled.prototype.getValue = function () {
        return this.element.value;
    };
    return NameFiled;
}());
var SurNameFiled = /** @class */ (function () {
    function SurNameFiled(name, label) {
        this.element = document.createElement('input');
        this.name = name;
        this.label = label;
        this.element.name = this.name;
    }
    SurNameFiled.prototype.render = function () {
        return this.element;
    };
    SurNameFiled.prototype.getValue = function () {
        return this.element.value;
    };
    return SurNameFiled;
}());
var MailField = /** @class */ (function () {
    function MailField(name, label) {
        this.element = document.createElement('input');
        this.name = name;
        this.label = label;
        this.element.name = this.name;
    }
    MailField.prototype.render = function () {
        return this.element;
    };
    MailField.prototype.getValue = function () {
        return this.element.value;
    };
    return MailField;
}());
var SelectFiled = /** @class */ (function () {
    function SelectFiled(name, label) {
        this.opt1 = "informatyka";
        this.opt2 = "Inżynieria";
        this.element = document.createElement('select');
        this.name = name;
        this.label = label;
        this.element.name = this.name;
    }
    SelectFiled.prototype.render = function () {
        return this.element;
    };
    SelectFiled.prototype.getValue = function () {
        return this.element.value;
    };
    return SelectFiled;
}());
var CheckFiled = /** @class */ (function () {
    function CheckFiled(name, label) {
        this.element = document.createElement("checkbox");
        this.name = name;
        this.label = label;
        this.element.name = this.name;
    }
    CheckFiled.prototype.render = function () {
        return this.element;
    };
    CheckFiled.prototype.getValue = function () {
        return this.element.value;
    };
    return CheckFiled;
}());
