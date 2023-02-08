import AdminLayout from "../layout";
// import MDEditor from '@uiw/react-md-editor';
import { useState } from "react";
// import rehypeSanitize from "rehype-sanitize";
import 'react-quill/dist/quill.snow.css'
import dynamic from "next/dynamic";
const QuillNoSSRWrapper = dynamic(import('react-quill'), {	
	ssr: false,
	loading: () => <p>Loading ...</p>,
	})

function EditPost(){
    const [value, setValue] = useState("**Hello world!!!**");
    const modules = {
        toolbar: [
          [{ header: '1' }, { header: '2' }, { font: [] }],
          [{ size: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
          ],
          ['link', 'image', 'video'],
          ['clean'],
        ],
        clipboard: {
          // toggle to add extra line breaks when pasting HTML:
          matchVisual: false,
        },
      }
      const formats = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'video',
      ]

    return(
        <AdminLayout>
            
            <div className="p-5 grid gap-4 overflow-y-auto">
            <h1 className="header">ADD POST</h1>

            <input placeholder="Enter title" className="p-4 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[rgba(240,142,128,.1)]" name="title"   />
            <input placeholder="Category" className="p-4 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[rgba(240,142,128,.1)]" name="title"   />
            
            <div className= "h-[65vh]">
                <label>Body</label>
            <QuillNoSSRWrapper className="h-[60vh] mb-10" modules={modules} formats={formats}  theme="snow" />
            </div>
            <label className="mt-10">Summary</label>
            <QuillNoSSRWrapper className="h-[60vh] mb-10"  theme="snow" />
            <input placeholder="summary" className="p-4 mt-9 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[rgba(240,142,128,.1)]" name="title"   />
            </div>

        
        </AdminLayout>

    )
}
export default EditPost;