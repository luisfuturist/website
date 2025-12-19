import { toast } from 'sonner'
import MaterialCheck from '~icons/material-symbols/check'
import MaterialClose from '~icons/material-symbols/close'
import MaterialContentCopySharp from '~icons/material-symbols/content-copy-sharp'
import MaterialError from '~icons/material-symbols/error'
import LogosDiscord from '@/components/icons/discord.svg?react'

function DiscordUsernameButton() {
  const handleCopy = () => {
    if (!navigator.clipboard) {
      toast.custom(t => (
        <div className="aug-button-2 flex items-center gap-4 p-4" data-augmented-ui="tr-clip bl-clip both">
          <MaterialError className="size-6 flex-shrink-0 text-destructive" />
          <h1 className="text-destructive">
            Discord username won't be copied—clipboard not supported.
          </h1>
          <button type="button" onClick={() => toast.dismiss(t)} className="text-primary hover:text-link-primary-hover cursor-pointer">
            <MaterialClose className="size-6 flex-shrink-0" />
          </button>
        </div>
      ))
      return
    }

    navigator.clipboard.writeText('luisfuturist')
      .then(() => {
        toast.custom(t => (
          <div className="aug-button-2 text-accent flex items-center gap-4 p-4" data-augmented-ui="tr-clip bl-clip both">
            <MaterialCheck className="size-6 flex-shrink-0 text-accent" />
            <h1>Discord username copied to clipboard</h1>
            <button type="button" onClick={() => toast.dismiss(t)} className="text-primary hover:text-link-primary-hover cursor-pointer">
              <MaterialClose className="size-6 flex-shrink-0" />
            </button>
          </div>
        ))
      })
      .catch(() => {
        toast.custom(t => (
          <div className="aug-button-2 flex items-center gap-4 p-4" data-augmented-ui="tr-clip bl-clip both">
            <MaterialError className="size-6 flex-shrink-0 text-destructive" />
            <h1 className="text-destructive">Failed to copy Discord username</h1>
            <button type="button" onClick={() => toast.dismiss(t)} className="text-primary hover:text-link-primary-hover cursor-pointer">
              <MaterialClose className="size-6 flex-shrink-0" />
            </button>
          </div>
        ))
      })
  }

  return (
    <button type="button" className="flex items-center gap-1 text-2xl text-foreground hover:text-link-primary-hover cursor-pointer" onClick={handleCopy}>
      <LogosDiscord className="size-6 flex-shrink-0 fill-current mr-1" />
      luisfuturist
      <MaterialContentCopySharp className="size-6 flex-shrink-0" />
    </button>
  )
}

export default DiscordUsernameButton
