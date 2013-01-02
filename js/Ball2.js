// namespace
this.hothouse = this.hothouse || {};

(function ()
{
    // constructor
    function ClassName()
    {
        console.log("ClassName");
    }

    // shortcut to reference prototypes
    var p = ClassName.prototype;

    // public var
    p.someVar = 1;

    // static var
    ClassName.SOME_STATIC_VAR = 1;

    // public method
    p.somePublicMethod = function ()
    {
        console.log("somePublicMethod");
    }

    // public static method
    ClassName.somePublicStaticMethod = function ()
    {
        console.log("somePublicStaticMethod");
    }

    hothouse.ClassName = ClassName;
}());