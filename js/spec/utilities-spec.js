describe('Javascipt concatination function', function(){
    var utils;
    beforeEach(function(){
        utils =new Utilities();
    });
    it('should concatinate two strings', function(){
        var string1 ="foo";
        var string2 ="bar";
         var expectedResult= string1.concat(string2);

        expect(utils.concatinate(string1,string2)).toEqual(expectedResult);

    });

    it('should concatinate array and string', function(){
        var array1 =['hello','world','pretty'];
        var string1 = 'foo';

        expect(utils.concatinate(array1, string1, 'fat')).toEqual("helloworldprettyfoofat");
    });
    it('should concatinate two arrays and string', function(){
           var array1 =['1','2','3'] ;
           var array2 =['4','5','6'] ;

        expect(utils.concatinate(array1, array2, 'seven')).toEqual("123456seven");
    });
    it('should concatinate arrays and strings in any order given', function(){
           var array1 =['1','2','3'] ;
           var array2 =['4','5','6'] ;

        expect(utils.concatinate(array1,'eight', array2, 'seven')).toEqual("123eight456seven");
    });
    it('should concatinate array values when only array is passed in', function(){
           var array1 =['1','2','3'] ;

        expect(utils.concatinate(array1)).toEqual("123");
    });

    it('should not blow up and return "" when no params are passed in', function(){
        expect(utils.concatinate()).toEqual("");
    });
    it('should not blow up and return "" when non strings are passed in', function(){
        expect(utils.concatinate(1,2,3,4)).toEqual("");
    })
    it('should not blow up and return "" when strings and non-strings are passed in', function(){
        expect(utils.concatinate(1,2,"hi",3,4)).toEqual("");
    });
    it('should not blow up and return "" when array contains non strings and strings', function(){
        expect(utils.concatinate(1,[2,"hi"],3,4)).toEqual("");
    });
});
