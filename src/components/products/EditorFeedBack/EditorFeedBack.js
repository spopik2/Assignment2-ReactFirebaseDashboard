import React from 'react';
import { useNavigate } from 'react-router-dom';

import {EditorFeedBackStyles,FeedBack,FeedBackMessage,FeedBackOptions} from './styles'
import {Button} from'ui/buttons'
import {ImCloudUpload} from 'react-icons/im'
import {IoMdCloudDone} from 'react-icons/io'

function EditorFeedBack ({children,status,writeCompleted, ...props})  {
  const navigator = useNavigate()
  return (
        <EditorFeedBackStyles  {...props}>
          {
            !status
            ?
            <FeedBack>
              <IoMdCloudDone color='#19CBFF' size={200}/>
              <FeedBackMessage>
                Product Uploaded Successfully
              </FeedBackMessage>
            </FeedBack>
            :
            <FeedBack>
              <ImCloudUpload color='#19CBFF' size={200}/>
              <FeedBackMessage>
                Uploading New Product
              </FeedBackMessage>
            </FeedBack>
          }
          <FeedBackOptions>
            <Button bc="#19CBFF" color='black' onClick={()=>writeCompleted(false)} disabled={status}>Add Another Stick</Button>
            <Button bc="#19CBFF" color='black' onClick={()=> navigator('/dashboard')}>View All Sticks</Button>
          </FeedBackOptions>

        </EditorFeedBackStyles>
  )
}

export default EditorFeedBack