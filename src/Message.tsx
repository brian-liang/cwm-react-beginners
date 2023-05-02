function Message() {
    const name: String = "Brian"
    if(name)
        return <div>Hello {name}</div>
    return <h1>Hello World</h1>
}

export default Message