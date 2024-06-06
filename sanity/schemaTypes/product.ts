import { title } from "process";

export default {
    name:'product',
    type:'document',
    title:'Product',
    fields:[
        {
            name:'name',
            type:'string',
            title:'name of Product'
        },
        {
            name:'images',
            type:'array',
            title:'Product Images',
            of:[{type:'image'}],
        },
        {
            name:'description',
            type:'text',
            title:'Description of product',
        },
        {
            name:'slug',
            type:'slug',
            title:'Product slug',
            options:{
                source:'name',
            }
        },
        {
            name:'price',
            title:'price',
            type:'number',
        },{
            name:'category',
            title:'Product Category',
            type:'reference',
            to:[
                {
                    type:'category',
                }
            ]
        }
    ],

}