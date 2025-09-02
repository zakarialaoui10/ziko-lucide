import {tags} from 'ziko';
const {svg} = tags;
const MailMinus = (props) => 
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
    tags.path({"d":"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}),
	tags.path({"d":"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}),
	tags.path({"d":"M16 19h6"})
    )
export default MailMinus;
