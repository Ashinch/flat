tell application "iTerm"
    activate
    set W to create window with default profile
    tell W's current session
        split vertically with default profile
    end tell
    set T to W's current tab
    set ProjectRoot to "$(dirname $(dirname $(dirname $(dirname " & (POSIX path of (path to me)) & "))))"
    write T's session 1 text "pnpm --filter renderer-app -C \"" & ProjectRoot & "\" start"
    write T's session 2 text "pnpm --filter flat -C \"" & ProjectRoot & "\" start"
end tell
