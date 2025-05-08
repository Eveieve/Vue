<script>
export default {
    props : {
        name : {
            type : String, 
            required: true, 
            validator : function (value){
                return value.length > 2;
            },
        },
    
        age : {
            type: Number, 
            default : function() {
                return 25;
            }
        },

        address : {
            type: String, 
        }, 
        
        phone : {
            type : String,
            validator : function(value) {
                return value.length >13;
            }
        }
    }
}
</script>

<template>
<p>name : {{ name }}</p>
<p>age : {{ age }}</p>
<p>phone : {{ phone }}</p>
<p>address : {{ address }}</p>
</template>