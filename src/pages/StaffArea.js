import '../styles/StaffArea.css'

export default function StaffArea({movies}){
    console.log('movies', movies);
    return (
        <div className ='grid-container'>
            <div className='staff-nav'>
                <p>navigation panel for staff area, current view is movies</p>
            </div>
            <div className='body-container'>
                <p>You are in a restricted area. There should have been some form of authentication to prevent this!</p>
                <button>Add</button>
                <button>Delete Selected</button>
                <label>Edit Mode</label>
                <input type='checkbox'></input>
                <table>
                    <thead>
                        <tr className="table-header">
                            <th>-</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Age Rating</th>
                            <th>Archived</th>
                            <th>Duration (minutes)</th>
                            <th>Stock Count</th>
                            <th>Thumbnail URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map(element => {
                            return (
                                <tr key={element.id}>
                                    <td>
                                        <input type='checkbox'></input>
                                    </td>
                                    <td>{element.name}</td>
                                    <td>{element.category}</td>
                                    <td>{element.ageRating}</td>
                                    <td>
                                        <input type='checkbox' disabled={true} defaultChecked={element.archived} ></input>
                                    </td>
                                    <td>{element.durationMinutes}</td>
                                    <td>{element.stockCount}</td>
                                    <td>{element.thumbnailUrl}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}