import React, { useState } from 'react';
import { MentionsInput, Mention } from 'react-mentions';
import AppButton from '../AppButton';
import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import defaultStyle from './defaultStyle';
import Comments from './Comments';

const users = [
  { id: '1', display: 'John Doe' },
  { id: '2', display: 'Jane Smith' },
  { id: '3', display: 'Bob Johnson' }
];

function App() {
  const [value, setValue] = useState('');

  return (
      <Box>
        <MentionsInput
            value={value}
            placeholder='Enter your comment'
            onChange={(event, newValue) => setValue(newValue)}
            style={defaultStyle}
        >
            <Mention
            trigger="@"
            data={users}
            renderSuggestion={(suggestion, search, highlightedDisplay) => <Suggestion displayName={suggestion?.display || ""} />}
            />
        </MentionsInput>
        <AppButton float="right" color="white" marginTop="-36px" bgColor="#6B49F2" fontSize="md" marginRight="8px" size="small" padding="4px">SEND</AppButton>
      </Box>
  );
}

const Suggestion: React.FC<{displayName: string}> = ({ displayName }) => {
    return <Flex gap="4px">
        <Avatar title={displayName} name={displayName} size="xs" />
        {displayName}
    </Flex>
}


export default App;


