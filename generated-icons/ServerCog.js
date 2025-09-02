import {tags} from 'ziko';
const {svg} = tags;
const ServerCog = (props) => 
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
    tags.path({"d":"m10.852 14.772-.383.923"}),
	tags.path({"d":"M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923"}),
	tags.path({"d":"m13.148 9.228.383-.923"}),
	tags.path({"d":"m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544"}),
	tags.path({"d":"m14.772 10.852.923-.383"}),
	tags.path({"d":"m14.772 13.148.923.383"}),
	tags.path({"d":"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"}),
	tags.path({"d":"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"}),
	tags.path({"d":"M6 18h.01"}),
	tags.path({"d":"M6 6h.01"}),
	tags.path({"d":"m9.228 10.852-.923-.383"}),
	tags.path({"d":"m9.228 13.148-.923.383"})
    )
export default ServerCog;
