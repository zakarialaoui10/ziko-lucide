import {tags} from 'ziko';
const {svg} = tags;
const Upload = (props) => 
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
    tags.path({"d":"M12 3v12"}),
	tags.path({"d":"m17 8-5-5-5 5"}),
	tags.path({"d":"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"})
    )
export default Upload;
