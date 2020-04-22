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
document.write(NameFiled + "");
