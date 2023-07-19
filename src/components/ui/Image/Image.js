import styled from 'styled-components'

const Image = styled.div`
    width: ${props=>props.sizeWidth}
    & img{
        width: 100%;
    }
`

export default Image;