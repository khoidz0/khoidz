function Ex4() {
    return (
        <div className="container">
            <form>
                <div class="mb-3">
                    <label for="Email1" class="form-label">Email </label>
                    <input type="email" class="form-control" id="Email1" aria-describedby="emailHelp"></input>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="Password1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="Password1"></input>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="Check1"></input>
                    <label class="form-check-label" for="Check1">Check</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
export default Ex4;