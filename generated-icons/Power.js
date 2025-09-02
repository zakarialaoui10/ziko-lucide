import {tags} from 'ziko';
const {svg} = tags;
const Power = (props) => 
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
    tags.path({"d":"M12 2v10"}),
	tags.path({"d":"M18.4 6.6a9 9 0 1 1-12.77.04"})
    )
export default Power;
