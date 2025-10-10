import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

const WritePage = () => {
    retrun (
        <main>
            <section>
                <Editor
                    initialValue=""
                    previewStyle="vertical"
                    height="600px"
                    initialEditType="markdown"
                    useCommandShortcut={true}
                />
            </section>
        </main>
    )
}

export default WritePage;