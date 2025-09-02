import {tags} from 'ziko';
const {svg} = tags;
const PlugZap = (props) => 
    svg(
        {
        ...{
         "viewBox": "0 0 24 24",
         "fill": "none",
         "width": 24,
         "height": 24,
         "stroke": "green",
         "stroke-width": 2,
         "stroke-linecap": "round",
         "stroke-linejoin": "round"
        },
        ...props
        },
    tags.path({"d":"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"}),
	tags.path({"d":"m2 22 3-3"}),
	tags.path({"d":"M7.5 13.5 10 11"}),
	tags.path({"d":"M10.5 16.5 13 14"}),
	tags.path({"d":"m18 3-4 4h6l-4 4"})
    )
export default PlugZap;
