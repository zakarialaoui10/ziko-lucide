import {tags} from 'ziko';
const {svg} = tags;
const Mails = (props) => 
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
    tags.path({"d":"M17 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 1-1.732"}),
	tags.path({"d":"m22 5.5-6.419 4.179a2 2 0 0 1-2.162 0L7 5.5"}),
	tags.rect({"x":"7","y":"3","width":"15","height":"12","rx":"2"})
    )
export default Mails;
